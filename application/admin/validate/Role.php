<?php
// +----------------------------------------------------------------------
// | likeshop开源商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | gitee下载：https://gitee.com/likeshop_gitee
// | github下载：https://github.com/likeshop-github
// | 访问官网：https://www.likeshop.cn
// | 访问社区：https://home.likeshop.cn
// | 访问手册：http://doc.likeshop.cn
// | 微信公众号：likeshop技术社区
// | likeshop系列产品在gitee、github等公开渠道开源版本可免费商用，未经许可不能去除前后端官方版权标识
// |  likeshop系列产品收费版本务必购买商业授权，购买去版权授权后，方可去除前后端官方版权标识
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | likeshop团队版权所有并拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeshop.cn.team
// +----------------------------------------------------------------------

namespace app\admin\validate;

use think\Db;
use think\Validate;

class Role extends Validate
{

    protected $rule = [
        'id' => 'adminExistRole',
        'name' => 'require',
        'auth_ids' => 'array'
    ];

    protected $message = [
        'name.require' => '角色名不能为空',
        'auth_ids.auth' => '权限错误',
        'id.adminExistRole' => '管理员列表存在该角色，无法删除',
    ];

    protected function sceneAdd()
    {
        $this->remove('id', ['adminExistRole']);
    }

    protected function sceneEdit()
    {
        $this->remove('id', ['adminExistRole']);
    }

    public function sceneDel()
    {
        $this->remove('name', ['require'])
            ->remove('auth_ids', ['auth']);
    }




    /**
     * 判断管理列表是否存在该角色
     * @param $id
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    protected function adminExistRole($id)
    {
        $result = Db::name('admin')->where(['role_id' => $id, 'del' => 0])->find();
        if ($result) {
            return false;
        }
        return true;
    }
}