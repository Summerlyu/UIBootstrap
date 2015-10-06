package cn.edu.fjnu.cdio.service.grp;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.grp.CheckGroup;
import cn.edu.fjnu.cdio.utils.Page;

public interface CheckGroupService {
	public void addCheckGroup(CheckGroup checkGroup);
	public CheckGroup selectCheckGroup(Long checkGroupId);
	public Page<CheckGroup> showCheckGroupPage(String hql,int pageSize,int index);
	public void deleteCheckGroup(CheckGroup checkGroup);
	public User selectUser(Long userId);
	public byte[] getGroupPic(Long checkGroupId);

}
